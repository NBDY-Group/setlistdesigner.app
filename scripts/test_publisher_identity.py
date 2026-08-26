import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC_HTML = (
    ROOT / "index.html",
    ROOT / "privacy" / "index.html",
    ROOT / "terms" / "index.html",
    ROOT / "support" / "index.html",
    ROOT / "404.html",
)


class PublisherIdentityTests(unittest.TestCase):
    def test_every_page_discloses_brand_legal_owner_and_company_details(self) -> None:
        for path in PUBLIC_HTML:
            text = path.read_text(encoding="utf-8")
            with self.subTest(path=path.relative_to(ROOT)):
                self.assertIn("NBDY Software Solutions", text)
                self.assertIn("© 2026 Nobody Management Ltd", text)
                self.assertIn("A trading name of Nobody Management Ltd", text)
                self.assertIn("14788999", text)
                self.assertIn("60 Weir Road", text)


if __name__ == "__main__":
    unittest.main()
