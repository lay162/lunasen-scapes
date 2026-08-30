"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  Copy,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  QrCode,
  Share2,
  UserPlus,
  X,
} from "lucide-react";

import { BrandName } from "@/components/brand-mark";
import { SITE, brandedCardUrl, fullAddress, legalLine } from "@/lib/site";
import { cn } from "@/lib/utils";

import styles from "@/app/BusinessCard/card.module.css";

const PORTFOLIO = [
  {
    label: "gardens",
    images: [
      { src: "/work/garden-before.jpg", alt: "Garden before a makeover" },
      { src: "/work/garden-after.jpg", alt: "Finished accessible garden" },
      { src: "/work/dig-off.jpg", alt: "Garden dig off" },
      { src: "/work/garden-2.jpg", alt: "Landscaped family garden" },
    ],
  },
  {
    label: "driveways",
    images: [{ src: "/work/driveway.jpg", alt: "Block paving driveway" }],
  },
  {
    label: "fencing",
    images: [{ src: "/work/fencing.jpg", alt: "Timber fencing" }],
  },
  {
    label: "patios",
    images: [
      { src: "/work/patio.jpg", alt: "Indian sandstone patio" },
      { src: "/work/patio-2.jpg", alt: "Porcelain patio" },
    ],
  },
  {
    label: "foundations",
    images: [{ src: "/work/foundations.jpg", alt: "Foundation and dig out" }],
  },
  {
    label: "steps",
    images: [{ src: "/work/steps.jpg", alt: "Stone steps and levels" }],
  },
] as const;

function cardUrl() {
  return brandedCardUrl();
}

function liveCardData() {
  if (window.SWMDBC?.getDefaultCardData) return window.SWMDBC.getDefaultCardData();
  return {
    fullName: SITE.name,
    company: SITE.name,
    email: SITE.email,
    phone: SITE.phoneTel,
    website: SITE.url,
    cardUrl: cardUrl(),
  };
}

function startNfc() {
  if (!window.SWMNFCRuntime || !window.SWMDBC) return false;
  window.SWMNFCRuntime.initLiveCard(liveCardData());
  return true;
}

export function DigitalCard() {
  const [modal, setModal] = useState<"copy" | "qr" | null>(null);
  const [copied, setCopied] = useState(false);
  const [nfcMode, setNfcMode] = useState<"tap_n_share" | "tap_n_save" | "tap_n_swap">("tap_n_share");
  const shareUrl = brandedCardUrl();
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(shareUrl)}`;

  useEffect(() => {
    const ready = () => {
      if (!startNfc()) return false;
      const current = window.SWMDBC?.getNfcSharingPreference?.();
      if (current === "tap_n_share" || current === "tap_n_save" || current === "tap_n_swap") {
        setNfcMode(current);
      }
      return true;
    };
    if (ready()) return;
    const timer = window.setInterval(() => {
      if (ready()) window.clearInterval(timer);
    }, 200);
    return () => window.clearInterval(timer);
  }, []);

  function changeNfcMode(mode: "tap_n_share" | "tap_n_save" | "tap_n_swap") {
    setNfcMode(mode);
    window.SWMDBC?.setNfcSharingMode?.(mode);
  }

  async function share() {
    if ("NDEFReader" in window && window.SWMNFCRuntime) {
      try {
        await window.SWMNFCRuntime.shareCard(liveCardData());
        return;
      } catch {
        /* user cancelled NFC or no tag — fall through */
      }
    }
    const url = cardUrl();
    const payload = {
      title: `${SITE.name} — Business Card`,
      text: `${SITE.name} — Business Card`,
      url,
    };
    if (navigator.share) {
      try {
        await navigator.share(payload);
        return;
      } catch {
        /* cancelled or unsupported — fall through to copy */
      }
    }
    setModal("copy");
  }

  async function copy() {
    const url = cardUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className={styles.page} data-digital-card="">
      <Script src="/BusinessCard/luna-dbc-core.js" strategy="afterInteractive" />
      <Script src="/BusinessCard/luna-nfc-runtime.js" strategy="afterInteractive" />
      <header className={styles.header}>
        <div className={styles.topActions}>
          <button type="button" className={styles.topBtn} aria-label="Share business card" onClick={share}>
            <Share2 className="size-5" />
          </button>
          <button type="button" className={styles.topBtn} aria-label="Show QR code" onClick={() => setModal("qr")}>
            <QrCode className="size-5" />
          </button>
        </div>
      </header>

      <main id="main-content" className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.mark} aria-hidden="true">
            <BrandName stacked size="sm" inverted />
          </div>
          <div className={styles.info}>
            <p className={styles.name}>
              <BrandName stacked size="md" />
            </p>
            <p className={styles.subhead}>
              Safe places, gardens and building works for SEN children, SEN adults and disabled people — UK wide.
            </p>
          </div>
        </div>

        <p className={styles.desc}>gardens · playgrounds · driveways · fencing · patios · building works</p>

        <div className={styles.actions}>
          <div className={styles.ctaWrap}>
            <a
              className={cn(styles.cta, styles.ctaPink)}
              href="/BusinessCard/contact.vcf"
              download
              onClick={() => window.SWMNFCRuntime?.logTap?.("tap_save", liveCardData())}
            >
              <UserPlus className="size-5" />
              Save Contact
            </a>
          </div>
          <div className={styles.ctaWrap}>
            <Link className={cn(styles.cta, styles.ctaGradient)} href="/enquire/">
              Request Quote
            </Link>
          </div>

          <div className={styles.actionGrid}>
            <div className={styles.actionBtn}>
              <a href={`tel:${SITE.phoneTel}`} aria-label="Call">
                <Phone className="size-6" />
              </a>
              <p>Call</p>
            </div>
            <div className={styles.actionBtn}>
              <a href={`mailto:${SITE.email}`} aria-label="Email">
                <Mail className="size-6" />
              </a>
              <p>Email</p>
            </div>
            <div className={styles.actionBtn}>
              <Link href="/" aria-label="Website">
                <Globe className="size-6" />
              </Link>
              <p>Website</p>
            </div>
            <div className={styles.actionBtn}>
              <a href={`https://wa.me/${SITE.phoneTel.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle className="size-6" />
              </a>
              <p>WhatsApp</p>
            </div>
          </div>
        </div>

        <div className={styles.nfcBar} data-luna-nfc-bar="">
          <p className={styles.nfcTitle}>How this phone shares</p>
          <div className={styles.nfcModes} role="group" aria-label="NFC sharing mode">
            {(
              [
                ["tap_n_share", "Tap n Share", styles.nfcPink],
                ["tap_n_save", "Tap n Save", styles.nfcGradient],
                ["tap_n_swap", "Tap n Swap", styles.nfcBlue],
              ] as const
            ).map(([value, label, tone]) => (
              <button
                key={value}
                type="button"
                className={cn(styles.nfcMode, tone, nfcMode === value && styles.nfcModeOn)}
                aria-pressed={nfcMode === value}
                onClick={() => changeNfcMode(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <p className={styles.nfcHint}>Hold the backs of two Android phones together. Door and clock readers work too.</p>
        </div>

        <div className={styles.stream}>
          <section className={styles.section}>
            <h3 className={styles.title}>recent work</h3>
            {PORTFOLIO.map((group) => (
              <div key={group.label} className={styles.group}>
                <p className={styles.label}>{group.label}</p>
                <div className={styles.grid}>
                  {group.images.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={184}
                      sizes="(max-width: 480px) 45vw, 160px"
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <footer className={styles.cardFooter}>
          <BrandName stacked size="sm" />
          <p className={styles.footerMeta}>{legalLine()}</p>
          <p className={styles.footerMeta}>{fullAddress()}</p>
          <Link href="/">{SITE.url.replace(/^https:\/\//, "")}</Link>
          <br />
          <a href={SITE.cardPath}>{brandedCardUrl().replace(/^https:\/\//, "")}</a>
        </footer>
      </main>

      {modal ? (
        <div className={cn(styles.modal, styles.modalOpen)} onClick={() => setModal(null)} role="presentation">
          <div className={styles.modalView} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button type="button" className={styles.close} aria-label="Close" onClick={() => setModal(null)}>
              <X className="size-5" />
            </button>
            {modal === "copy" ? (
              <>
                <p>Copy and send the URL to share my Business Card</p>
                <button type="button" className={styles.copyBtn} onClick={copy}>
                  <Copy className="mr-2 inline size-4" />
                  {copied ? "Copied" : "Copy URL"}
                </button>
              </>
            ) : (
              <>
                <div className={styles.qr}>
                  {/* External QR image is a share helper, not user-uploaded content. */}
                  <Image
                    src={qrSrc}
                    alt={`QR code for the ${SITE.name} business card`}
                    width={220}
                    height={220}
                    sizes="220px"
                    unoptimized
                  />
                </div>
                <h2>Scan the QR Code</h2>
                <p>to view my Business Card on another device</p>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

declare global {
  interface Window {
    SWMDBC?: {
      getDefaultCardData: () => Record<string, unknown>;
      setNfcSharingMode?: (mode: string) => void;
      getNfcSharingPreference?: () => string;
    };
    SWMNFCRuntime?: {
      initLiveCard: (data: Record<string, unknown>) => void;
      shareCard: (data: Record<string, unknown>) => Promise<void>;
      logTap?: (type: string, data: Record<string, unknown>) => void;
    };
  }
}
