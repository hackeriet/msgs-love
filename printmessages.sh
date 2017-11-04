#!/bin/bash
set -eu

MESSAGE_PATH=${MESSAGE_PATH:-"."}
ROUNDS=${ROUNDS:-420}

while true; do
  for file in ${MESSAGE_PATH}/*
  do
    str="$(< $file)"
    for (( i=0; i<=$ROUNDS; i++ ))
    do
      printf $str
      sleep 0.0005
      ((i = i + 1))
    done
  done
done
