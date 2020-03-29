#!/bin/bash
python3 img_to_levelarr.py ./level_imgs.json
node ./replace_walls.js ./levels/lvls.json