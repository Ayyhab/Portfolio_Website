# Image Assets

Place your portrait images in this directory:

- `portrait.jpg` - Your main portrait image
- `portrait-displacement.jpg` - Depth/displacement map (grayscale, white = high, black = low)
- `portrait-roughness.jpg` - Roughness map (grayscale, white = rough, black = smooth)
- `portrait-alpha.jpg` - Alpha map for transparency (grayscale, white = opaque, black = transparent)

## Creating Maps

### Displacement Map
- Convert your portrait to grayscale
- Adjust brightness/contrast to create depth information
- White areas will appear raised, black areas will appear recessed

### Roughness Map
- Create a grayscale version
- Areas that should be shiny (like skin highlights) should be darker
- Areas that should be matte should be lighter

### Alpha Map (Optional)
- Use if you want transparent edges or cutouts
- White = visible, black = transparent

## File Formats
Supported formats: JPG, PNG, WebP
