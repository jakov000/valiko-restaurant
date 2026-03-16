from PIL import Image

img = Image.open('public/logo/logoneu.jpeg').convert('RGB')
pixels = img.load()

# Check corners to see what the background color is
print(f"Top-left: {pixels[0, 0]}")
print(f"Top-right: {pixels[img.width-1, 0]}")
print(f"Bottom-left: {pixels[0, img.height-1]}")
print(f"Bottom-right: {pixels[img.width-1, img.height-1]}")

# Find max R,G,B along the top edge
max_r = max(pixels[x, 0][0] for x in range(img.width))
max_g = max(pixels[x, 0][1] for x in range(img.width))
max_b = max(pixels[x, 0][2] for x in range(img.width))
print(f"Max brightness on top edge: R={max_r}, G={max_g}, B={max_b}")
