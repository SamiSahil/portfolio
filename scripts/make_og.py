"""Generate a 1200x630 social preview card for the portfolio.

Run: python scripts/make_og.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PORTRAIT = ROOT / "public" / "profile.jpg"
OUT = ROOT / "public" / "og.png"

W, H = 1200, 630
FONTS = Path(r"C:\Windows\Fonts")
BOLD = str(FONTS / "segoeuib.ttf")
REGULAR = str(FONTS / "segoeui.ttf")
MONO = str(FONTS / "consola.ttf")

BG_TOP = (10, 12, 15)
BG_BOTTOM = (23, 26, 32)
TEXT = (243, 246, 249)
MUTED = (171, 178, 188)
TECH = (139, 148, 158)
ACCENT = (217, 154, 108)


def font(path, size):
    return ImageFont.truetype(path, size)


def tracked(draw, xy, text, fnt, fill, tracking=0.0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking


def gradient(size, top, bottom):
    grad = Image.linear_gradient("L").resize(size)
    return Image.composite(Image.new("RGB", size, bottom), Image.new("RGB", size, top), grad)


def circular_portrait(size, ring):
    image = Image.open(PORTRAIT).convert("RGB")
    w, h = image.size
    side = min(w, h)
    image = image.crop(((w - side) // 2, 0, (w + side) // 2, side))
    image = image.resize((size, size), Image.LANCZOS).convert("RGBA")

    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size, size), fill=255)
    image.putalpha(mask)

    canvas = Image.new("RGBA", (size + ring * 2, size + ring * 2), (0, 0, 0, 0))
    canvas.alpha_composite(image, (ring, ring))
    ImageDraw.Draw(canvas).ellipse(
        (ring // 2, ring // 2, size + ring + ring // 2, size + ring + ring // 2),
        outline=(*ACCENT, 110),
        width=max(2, ring // 3),
    )
    return canvas


def main():
    base = gradient((W, H), BG_TOP, BG_BOTTOM).convert("RGBA")

    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    g.ellipse((820, -260, 1500, 420), fill=(*ACCENT, 60))
    g.ellipse((-300, 320, 420, 900), fill=(*ACCENT, 30))
    glow = glow.filter(ImageFilter.GaussianBlur(130))
    base = Image.alpha_composite(base, glow)

    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, W, 60):
        gd.line((x, 0, x, H), fill=(255, 255, 255, 8), width=1)
    for y in range(0, H, 60):
        gd.line((0, y, W, y), fill=(255, 255, 255, 8), width=1)
    base = Image.alpha_composite(base, grid)

    portrait = circular_portrait(250, 22)
    base.alpha_composite(portrait, (880, 120))

    d = ImageDraw.Draw(base)
    x = 78

    tracked(d, (x, 172), "FULL-STACK DEVELOPER", font(MONO, 17), ACCENT, tracking=4.2)
    d.rectangle((x, 210, x + 58, 216), fill=ACCENT)
    d.text((x - 3, 236), "Samiuzzaman Sahil", font=font(BOLD, 62), fill=TEXT)
    d.text(
        (x, 330),
        "Building clean, reliable web applications",
        font=font(REGULAR, 26),
        fill=MUTED,
    )
    d.text((x, 366), "from database to interface.", font=font(REGULAR, 26), fill=MUTED)
    d.text(
        (x, 430),
        "React  \u00b7  Node.js  \u00b7  Express  \u00b7  MongoDB  \u00b7  PostgreSQL",
        font=font(MONO, 18),
        fill=TECH,
    )

    d.line((78, 545, 1122, 545), fill=(255, 255, 255, 20), width=1)
    d.text((78, 566), "samisahil.github.io/portfolio", font=font(MONO, 18), fill=ACCENT)
    d.text((1122, 566), "github.com/SamiSahil", font=font(MONO, 18), fill=TECH, anchor="ra")

    base.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
