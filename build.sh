#!/bin/bash
# VRDControl Build Script
# Inlines all JS and CSS into a single index.html for maximum compatibility
# The multi-file structure remains for development, this is the "dist" output

OUTPUT="/home/claude/vrdcontrol-dist/index.html"
mkdir -p /home/claude/vrdcontrol-dist
SRC="/home/claude/vrdcontrol"

# Read index.html and process it
# 1. Replace CSS link with inline <style>
# 2. Replace all <script src="js/..."> with inline <script> content

python3 << 'PYTHON'
import re

with open("/home/claude/vrdcontrol/index.html", "r") as f:
    html = f.read()

# Inline CSS
with open("/home/claude/vrdcontrol/css/main.css", "r") as f:
    css_content = f.read()

html = html.replace(
    '    <link rel="stylesheet" href="css/main.css">',
    '    <style>\n' + css_content + '\n    </style>'
)

# Inline all local JS files (not CDN ones)
js_files = [
    "js/core/helpers.js",
    "js/storage/storage.js",
    "js/map/map.js",
    "js/map/capture.js",
    "js/ui/modals.js",
    "js/ui/projects.js",
    "js/ui/archives.js",
    "js/ui/points.js",
    "js/reports/standard.js",
    "js/reports/interactive.js",
    "js/reports/sync.js",
    "js/reports/csv.js",
    "js/reports/text.js",
    "js/core/app.js",
]

for js_file in js_files:
    tag = f'    <script src="{js_file}"></script>'
    with open(f"/home/claude/vrdcontrol/{js_file}", "r") as f:
        js_content = f.read()
    
    replacement = f'    <script>\n    // === {js_file} ===\n{js_content}\n    </script>'
    html = html.replace(tag, replacement)

with open("/home/claude/vrdcontrol-dist/index.html", "w") as f:
    f.write(html)

print(f"Built single-file version: {len(html)} bytes")
PYTHON
