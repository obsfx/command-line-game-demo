#!/bin/bash
python3 img_to_levelarr.py ./level_imgs.json
node ./replace-walls.js ./levels/lvls.json