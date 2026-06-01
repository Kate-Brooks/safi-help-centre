import { useState } from 'react';
import { Box, Button, Snackbar, Tooltip } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { useTranslation } from 'react-i18next';
import { safiTokens } from '../theme';

interface Props {
  title: string;
  onDownloadPdf: () => void;
  preparingPdf?: boolean;
}

/** Share + export controls: email, WhatsApp, copy link, download PDF. */
export function ShareBar({ title, onDownloadPdf, preparingPdf }: Props) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title} — Safi Help Centre`;
  const emailHref = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`${shareText}\n${url}`)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(true);
    }
  };

  const btnSx = { color: safiTokens.textPrimary, borderColor: safiTokens.divider } as const;

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
      <Tooltip title={t('article.shareViaEmail')}>
        <Button size="small" variant="outlined" href={emailHref} startIcon={<EmailOutlinedIcon />} sx={btnSx}>
          {t('article.shareViaEmail')}
        </Button>
      </Tooltip>
      <Tooltip title={t('article.shareViaWhatsApp')}>
        <Button
          size="small"
          variant="outlined"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          sx={btnSx}
        >
          WhatsApp
        </Button>
      </Tooltip>
      <Tooltip title={t('article.copyLink')}>
        <Button size="small" variant="outlined" onClick={copyLink} startIcon={<LinkOutlinedIcon />} sx={btnSx}>
          {t('article.copyLink')}
        </Button>
      </Tooltip>
      <Button
        size="small"
        variant="contained"
        onClick={onDownloadPdf}
        disabled={preparingPdf}
        startIcon={<PictureAsPdfOutlinedIcon />}
      >
        {preparingPdf ? t('article.preparingPdf') : t('article.downloadPdf')}
      </Button>
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message={t('article.linkCopied')}
      />
    </Box>
  );
}
