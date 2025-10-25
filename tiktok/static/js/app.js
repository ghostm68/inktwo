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
    resultsDiv.innerHTML = '<div class="loading">Loading... Downloading videos...</div>';
    
    try {
        const response = await fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ urls })
        });
        
        const data = await response.json();
        
        resultsDiv.innerHTML = '';
        data.results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'result-item ' + result.status;
            
            if (result.status === 'success') {
                div.innerHTML = 'Success! <strong>' + result.title + '</strong><br>Downloaded successfully!';
            } else {
                div.innerHTML = 'Error: <strong>' + result.error + '</strong>';
            }
            
            resultsDiv.appendChild(div);
        });
        
    } catch (error) {
        resultsDiv.innerHTML = '<div class="result-item error">Error: ' + error.message + '</div>';
    } finally {
        downloadBtn.disabled = false;
    }
}
