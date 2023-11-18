from muselsl import stream, list_muses

# list all mmuses
muses = list_muses()

# stream the muse data from first one

# loop through every muse, connect to our muse
for muse in muses:
    if muse.get("address") == "00:55:DA:B7:F7:DD":
        stream(muse['address'])

print("Stream has ended")



