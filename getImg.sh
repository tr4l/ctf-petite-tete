#!/bin/bash
for i in {0..50}
do
   wget "https://picsum.photos/100" -O stega-$i.jpg
done
