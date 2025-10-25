from flask import Flask, render_template, request, jsonify, send_file
import yt_dlp
import os
import glob

app = Flask(__name__)

DOWNLOAD_DIR = 'downloads'
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download', methods=['POST'])
def download():
    data = request.json
    urls = data.get('urls', [])
    download_type = data.get('type', 'single')
    
    if not urls:
        return jsonify({'error': 'No URLs provided'}), 400
    
    results = []
    
    for url in urls:
        url = url.strip()
        if not url:
            continue
            
        # Check if it's a profile URL
        if download_type == 'profile' or ('@' in url and '/video/' not in url):
            # Download all videos from profile
            ydl_opts = {
                'outtmpl': os.path.join(DOWNLOAD_DIR, '%(uploader)s_%(title)s.%(ext)s'),
                'format': 'best',
                'quiet': True,
                'ignoreerrors': True,
            }
            
            try:
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    info = ydl.extract_info(url, download=True)
                    if 'entries' in info:
                        count = len([e for e in info['entries'] if e])
                        results.append({
                            'url': url,
                            'status': 'success',
                            'title': f"Downloaded {count} videos from profile",
                            'type': 'profile'
                        })
                    else:
                        results.append({
                            'url': url,
                            'status': 'success',
                            'title': info.get('title', 'Video'),
                            'filename': f"{info.get('uploader', 'user')}_{info.get('title', 'video')}.{info.get('ext', 'mp4')}",
                            'type': 'single'
                        })
            except Exception as e:
                results.append({
                    'url': url,
                    'status': 'error',
                    'error': str(e),
                    'type': 'profile'
                })
        else:
            # Download single video
            ydl_opts = {
                'outtmpl': os.path.join(DOWNLOAD_DIR, '%(title)s.%(ext)s'),
                'format': 'best',
                'quiet': True,
            }
            
            try:
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    info = ydl.extract_info(url, download=True)
                    filename = f"{info.get('title', 'video')}.{info.get('ext', 'mp4')}"
                    results.append({
                        'url': url,
                        'title': info.get('title', 'Unknown'),
                        'status': 'success',
                        'filename': filename,
                        'type': 'single'
                    })
            except Exception as e:
                results.append({
                    'url': url,
                    'status': 'error',
                    'error': str(e),
                    'type': 'single'
                })
    
    return jsonify({'results': results})

@app.route('/get-file/<path:filename>')
def get_file(filename):
    filepath = os.path.join(DOWNLOAD_DIR, filename)
    if os.path.exists(filepath):
        return send_file(filepath, as_attachment=True)
    return jsonify({'error': 'File not found'}), 404

@app.route('/list-files')
def list_files():
    files = glob.glob(os.path.join(DOWNLOAD_DIR, '*'))
    file_list = [os.path.basename(f) for f in files]
    return jsonify({'files': file_list})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
