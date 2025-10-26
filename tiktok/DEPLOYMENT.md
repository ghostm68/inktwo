# TikTok Downloader - Complete Deployment Guide

## Prerequisites

```bash
# Install required packages
pip install flask yt-dlp

# Verify nginx is installed
nginx -v
```

## Step 1: Prepare Files

1. **Update Flask Backend**
   ```bash
   cd /workspaces/inktwo/tiktok
   # Replace app.py with the new version from artifacts
   ```

2. **Update Frontend**
   ```bash
   # Replace index.html with the new version
   # Ensure it's in /workspaces/inktwo/tiktok/index.html
   ```

3. **Verify Directory Structure**
   ```bash
   /workspaces/inktwo/tiktok/
   ├── app.py              # Flask backend
   ├── index.html          # Frontend
   └── downloads/          # Downloaded files (auto-created)
   ```

## Step 2: Start Flask Backend

### Option A: Foreground (for testing)
```bash
cd /workspaces/inktwo/tiktok
python app.py
```

### Option B: Background Service (production)
```bash
cd /workspaces/inktwo/tiktok
nohup python app.py > flask.log 2>&1 &
```

### Verify Flask is Running
```bash
# Check process
ps aux | grep "python.*app.py"

# Test health endpoint
curl http://localhost:5000/health
# Should return: {"service":"tiktok-downloader","status":"healthy"}
```

## Step 3: Configure Nginx

### Find Your Nginx Config
```bash
# Common locations:
ls /etc/nginx/sites-available/
ls /etc/nginx/conf.d/
```

### Add Proxy Configuration

1. **Edit your site config** (e.g., `/etc/nginx/sites-available/inkrealm.info`)
   ```bash
   sudo nano /etc/nginx/sites-available/inkrealm.info
   ```

2. **Add the TikTok proxy section** (from nginx-tiktok.conf artifact)
   - Add both `/tiktok/` and `/tiktok/api/` location blocks
   - Adjust paths if needed

3. **Test nginx configuration**
   ```bash
   sudo nginx -t
   ```

4. **Reload nginx**
   ```bash
   sudo systemctl reload nginx
   # OR
   sudo service nginx reload
   ```

## Step 4: Test the Setup

### Test 1: Static Files
```bash
curl https://inkrealm.info/tiktok/
# Should return HTML content
```

### Test 2: API Health
```bash
curl https://inkrealm.info/tiktok/api/health
# Should return: {"service":"tiktok-downloader","status":"healthy"}
```

### Test 3: Download Function
```bash
curl -X POST https://inkrealm.info/tiktok/api/download \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://www.tiktok.com/@username/video/1234567890"], "type": "single"}'
```

### Test 4: Browser Test
Open `https://inkrealm.info/tiktok/` in your browser and try downloading a video.

## Troubleshooting

### Flask Not Running
```bash
# Check logs
tail -f /workspaces/inktwo/tiktok/flask.log

# Restart Flask
pkill -f "python app.py"
cd /workspaces/inktwo/tiktok
nohup python app.py > flask.log 2>&1 &
```

### Nginx 502 Bad Gateway
```bash
# Check if Flask is running on port 5000
netstat -tlnp | grep 5000

# Check nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Permission Issues
```bash
# Ensure downloads folder is writable
chmod 755 /workspaces/inktwo/tiktok/downloads
```

### yt-dlp Issues
```bash
# Update yt-dlp to latest version
pip install --upgrade yt-dlp

# Test yt-dlp directly
yt-dlp "https://www.tiktok.com/@username/video/1234567890"
```

## Maintenance

### Update yt-dlp Regularly
```bash
pip install --upgrade yt-dlp
# Restart Flask after update
```

### Clean Old Downloads
```bash
# Delete downloads older than 24 hours
find /workspaces/inktwo/tiktok/downloads -type f -mtime +1 -delete
```

### Monitor Logs
```bash
# Flask logs
tail -f /workspaces/inktwo/tiktok/flask.log

# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

## Production Optimizations

### 1. Use Process Manager (recommended)
```bash
# Install supervisor
sudo apt-get install supervisor

# Create supervisor config
sudo nano /etc/supervisor/conf.d/tiktok-downloader.conf
```

Add:
```ini
[program:tiktok-downloader]
command=/usr/bin/python3 /workspaces/inktwo/tiktok/app.py
directory=/workspaces/inktwo/tiktok
user=www-data
autostart=true
autorestart=true
stderr_logfile=/var/log/tiktok-downloader.err.log
stdout_logfile=/var/log/tiktok-downloader.out.log
```

Then:
```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start tiktok-downloader
```

### 2. Add SSL (if not already configured)
```bash
# Using Let's Encrypt
sudo certbot --nginx -d inkrealm.info
```

### 3. Set Up Log Rotation
```bash
sudo nano /etc/logrotate.d/tiktok-downloader
```

Add:
```
/workspaces/inktwo/tiktok/flask.log {
    daily
    rotate 7
    compress
    missingok
    notifempty
}
```

## Security Notes

1. **Rate Limiting**: Nginx config includes rate limiting (10 requests/minute)
2. **File Access**: Downloads are session-scoped to prevent unauthorized access
3. **Input Validation**: Flask validates all URLs and parameters
4. **Timeouts**: Set to 5 minutes for large downloads

## Support

If issues persist:
1. Check all logs (Flask + Nginx)
2. Verify ports aren't blocked by firewall
3. Ensure sufficient disk space for downloads
4. Test with simple single video first before profiles
