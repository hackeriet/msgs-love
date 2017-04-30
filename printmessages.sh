#!/bin/bash

MESSAGE_PATH=${MESSAGE_PATH:-"."}

while true; do
  for f in ${MESSAGE_PATH}/*
  do
    rounds=0
    while [[ $rounds -lt 777 ]]; do
      echo -n "$(cat $f)"
      rounds=$((rounds+1))
    done
  done
done
