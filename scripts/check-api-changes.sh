#!/bin/bash

# Generate new API files in a temporary directory
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/public/api"

# Run the API generation script and redirect output to temp files
npm run generate-api > /dev/null 2>&1

# Compare the newly generated files with existing ones
CHANGES_FOUND=0

for file in public/api/*.json; do
  filename=$(basename "$file")
  if [ -f "$file" ]; then
    if ! cmp -s "$file" "public/api/$filename"; then
      echo "⛔️ Error: API file $filename has changes that need to be committed."
      echo "Please run 'npm run generate-api', commit the changes, and try pushing again."
      CHANGES_FOUND=1
    fi
  fi
done

if [ $CHANGES_FOUND -eq 1 ]; then
  # Clean up
  rm -rf "$TEMP_DIR"
  exit 1
fi

# Clean up
rm -rf "$TEMP_DIR"
exit 0
