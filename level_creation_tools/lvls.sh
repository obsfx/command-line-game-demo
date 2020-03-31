#!/bin/bash
python3 img_to_levelarr.py ./level_imgs.json
node ./replace-tiles.js ./levels/lvls.json

cp ./levels_replaced/*.js ../src/levels/