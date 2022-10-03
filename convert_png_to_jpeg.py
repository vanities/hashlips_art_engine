import glob
from PIL import Image

filenames = glob.glob("build/images/*.png")

for filename in filenames:
    im = Image.open(filename)  # .resize((400,400))
    rgb_im = im.convert("RGB")  # is this needed?
    rgb_im.save(filename.replace("png", "jpeg"), quality=80)
