from PIL import Image

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Calculate average brightness
        brightness = (item[0] + item[1] + item[2]) / 3
        
        if brightness < 15:
            newData.append((0, 0, 0, 0))
        elif brightness < 60:
            # Semi-transparent for smooth anti-aliased edges
            # By pre-multiplying or just setting alpha
            alpha = int((brightness - 15) / 45 * 255)
            # Let's boost the lightness of the semi-transparent pixels 
            # to avoid black borders (fringing) when blended with light backgrounds.
            # But the background here will be dark grey anyway.
            newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

make_transparent('public/logo/logoneu.jpeg', 'public/logo/logoneu.png')
print("Successfully created logoneu.png")
