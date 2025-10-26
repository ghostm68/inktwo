from flask import Flask, request, jsonify, send_file
import yt_dlp
import os
import uuid
from pathlib import Path

app = Flask(__name__)

# Configuration
DOWNLOAD_FOLDER = Path('/workspaces/inktwo/tiktok/downloads')
DOWNLOAD_FOLDER.mkdir(exist_ok=True)

def download_tiktok(urls, download_type='single'):
    """Download TikTok videos using yt-dlp"""
    try:
        session_id = str(uuid.uuid4())[:8]
        output_path = DOWNLOAD_FOLDER / session_id
        output_path.mkdir(exist_ok=True)
        
        ydl_opts = {
            'outtmpl': str(output_path / '%(title)s.%(ext)s'),
            'format': 'best',
            'quiet': False,
        }
        
        if download_type == 'profile':
            ydl_opts['playlistend'] = 50
        
        downloaded_files = []
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            for url in urls:
                try:
                    info = ydl.extract_info(url, download=True)
                    
                    if 'entries' in info:
                        for entry in info['entries']:
                            if entry:
                                filename = ydl.prepare_filename(entry)
                                downloaded_files.append(os.path.basename(filename))
                    else:
                        filename = ydl.prepare_filename(info)
                        downloaded_files.append(os.path.basename(filename))
                        
                except Exception as e:
                    print(f"Error downloading {url}: {str(e)}")
                    continue
        
        return {
            'success': True,
            'session_id': session_id,
            'files': downloaded_files,
            'count': len(downloaded_files)
        }
        
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

@app.route('/download', methods=['POST'])
def download():
    """Handle download requests"""
    try:
        data = request.get_json()
        urls = data.get('urls', [])
        download_type = data.get('type', 'single')
        
        if not urls:
            return jsonify({'success': False, 'error': 'No URLs provided'}), 400
        
        result = download_tiktok(urls, download_type)
        
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 500
            
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/get-file/<session_id>/<filename>', methods=['GET'])
def get_file(session_id, filename):
    """Serve downloaded files"""
    try:
        file_path = DOWNLOAD_FOLDER / session_id / filename
        
        if not file_path.exists():
            return jsonify({'error': 'File not found'}), 404
        
        return send_file(
            file_path,
            as_attachment=True,
            download_name=filename
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'tiktok-downloader'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
