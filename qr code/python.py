import pyqrcode
from PIL import Image

qr = pyqrcode.create('https://www.youtube.com/watch?v=34CZjsEI1yU')

qr.png('test.png', scale=10)

img = Image.open('test.png').convert('RGBA')

fg_color = (0, 255, 0, 255)
bg_color = (255, 255, 255, 255)

new_img = Image.new('RGBA', img.size, bg_color)

img_data = img.load()
new_img_data = new_img.load()

for y in range(img.size[1]):
    for x in range(img.size[0]):
        pixel = img_data[x, y]
        if pixel[0] == 0:
            new_img_data[x, y] = fg_color
        else:
            new_img_data[x, y] = bg_color

new_img.save('custom_qr.png')
