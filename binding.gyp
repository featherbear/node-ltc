{
  "targets": [
    {
      "target_name": "liblibltc", # So the initial `lib` gets stripped off...
      "type": "shared_library",
      "sources": [
        "lib/libltc/ltc.c",
        "lib/libltc/decoder.c",
        "lib/libltc/encoder.c",
        "lib/libltc/timecode.c",
      ]
    }
  ]
}
