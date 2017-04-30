#!/bin/bash

MESSAGE_DIR=${MESSAGE_DIR:-"./"}

while true; do
  for f in ${MESSAGE_DIR}/*
  do
    rounds=0
    while [[ $rounds -lt 777 ]]; do
      echo -n "$(cat $f)"
      rounds=$((rounds+1))
    done
  done
done
