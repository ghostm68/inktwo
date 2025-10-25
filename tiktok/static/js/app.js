let currentMode = 'single';

function switchTab(mode) {
    currentMode = mode;
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const textarea = document.getElementById('urls');
    if (mode === 'profile') {
        textarea.placeholder = 'Paste TikTok profile URL (e.g., https://www.tiktok.com/@username)';
    } else {
        textarea.placeholder = 'Paste TikTok URLs here (one per line for multiple videos)...';
    }
}

async function startDownload() {
    const urlsText = document.getElementById('urls').value.trim();
    const downloadBtn = document.getElementById('downloadBtn');
    const resultsDiv = document.getElementById('results');
    
    if (!urlsText) {
        alert('Please paste some TikTok URLs');
        return;
    }
    
    const urls = urlsText.split('\n').filter(url => url.trim());
    
    downloadBtn.disabled = true;
    resultsDiv.innerHTML = '<div class="loading">⏳ Downloading videos...</div>';
    
    try {
        const response = await fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                urls: urls,
                type: currentMode
            })
        });
        
        const data = await response.json();
        
        resultsDiv.innerHTML = '';
        data.results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'result-item ' + result.status;
            
            if (result.status === 'success') {
                if (result.type === 'profile') {
                    div.innerHTML = '✅ <strong>' + result.title + '</strong>';
                } else {
                    div.innerHTML = '✅ <strong>' + result.title + '</strong><br>' +
                        '<a href="/get-file/' + encodeURIComponent(result.filename) + 
                        '" class="download-link" download>📥 Download File</a>';
                }
            } else {
                div.innerHTML = '❌ <strong>Error:</strong> ' + result.error;
            }
            
            resultsDiv.appendChild(div);
        });
        
    } catch (error) {
        resultsDiv.innerHTML = '<div class="result-item error">❌ Error: ' + error.message + '</div>';
    } finally {
        downloadBtn.disabled = false;
    }
}
