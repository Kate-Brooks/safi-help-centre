import type { ArticleContent } from '../types';

/**
 * English content for "Collecting quality data".
 * Authored from the Safi QC tutorial transcript (Google Drive, June 2026).
 * Section ids are stable across locales so anchor links survive a language switch.
 */
export const collectingQualityDataEn: ArticleContent = {
  title: 'Collecting quality data',
  summary:
    'Use the Safi AI app to photograph material, generate an AI quality report, and review the results against your material specifications.',
  transcript: `Welcome to Safi AI Quality Control. In this video, we'll show you how to analyse material quality and generate AI reports using Safi AI.

First, download the Safi AI app from the App Store. We recommend using an iPhone 14 Pro or newer for best performance.

Then navigate to the app and go to Quality Control. If the load already exists in the app, find it and tap Analyse Now, or click into the load to see more load details. Then tap 'Analyse' at the bottom.

You can choose the material form, and we recommend you turn on 'Offline mode' if your site has weak data or signal. Offline mode safely stores the photos on your phone's browser so you can upload them via wifi later on. Next, tap 'Open camera' to start photographing material.

Stand in front of the material and point the camera towards it. Safi will guide you on the correct distance and angle before automatically taking the photo.

Safi supports both manual and automatic capture, but we recommend Automatic Capture for a fast and seamless workflow.

You can review photos at any time in the photo library. If an issue is detected, a red or yellow indicator will appear next to the library button and on the affected photo within the library view.

Settings, such as Offline Mode or alert vibrations, can be accessed in the top-right corner. Flash is available for low-light or night-shift environments.

For the most accurate results, we recommend capturing at least 10 photos per load. Avoid photographing the highly compressed side of the bale and instead focus on the flatter bale faces.

Once you're happy with the photo coverage, complete the report to generate your AI analysis.

Photos captured in Offline Mode can be uploaded later over Wi-Fi, either from the report page or from the Quality Control home page.

Once the photos have been analysed, you'll see the composition table comparing your material specifications that are set up in settings to the actual results of the AI.

To look through the photos that have been analysed by the AI, click into the report and go to the 'Photos' tab. Select 'AI Bale', then you'll see all of the photos that were taken during the session. We'll show you the analysed area of the bale outline and the materials that the AI has detected. You can toggle them on and off like so.

If you have noticed an issue with the AI, such as the wrong object has been detected, press and hold on the photo and you can leave a comment. This will go directly to our machine learning team so that we can keep improving your site's data.

You can also upload device photos to be analysed in the set-up steps, or via the report's photo library by clicking the upload button.

Reports can easily be shared with colleagues and you can download a PDF of the report containing all of the photos and the data.

If your site doesn't import loads into Safi in advance, you can create loads as they arrive at the yard. In Quality, select the create load option. Make sure you choose the correct material specification to give your reports meaningful context — more on that in a separate video.`,
  sections: [
    {
      id: 'before-you-begin',
      heading: 'Before you begin',
      intro:
        'Quality data is collected in the Safi AI iOS app by the operator on the yard. Set this up once before your first analysis.',
      steps: [
        {
          title: 'Download the Safi AI app',
          blocks: [
            {
              type: 'paragraph',
              body: 'Download the Safi AI app from the App Store and sign in with your Safi account.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'The Safi AI app listing on the iOS App Store.',
                caption: 'Safi AI on the App Store.',
              },
            },
          ],
        },
        {
          title: 'Use a recommended device',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              body: 'For the best camera and AI performance we recommend an **iPhone 14 Pro or newer**. Older devices work but may capture more slowly.',
            },
          ],
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Start an analysis',
      steps: [
        {
          title: 'Open the load in Quality Control',
          blocks: [
            {
              type: 'paragraph',
              body: 'Open the app and go to **Quality Control**. If the load already exists, find it and tap **Analyse now**, or open the load to see its details and tap **Analyse** at the bottom.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Quality Control load list in the app with an Analyse now button on a load.',
                caption: 'Find the load and tap Analyse now.',
              },
            },
          ],
        },
        {
          title: 'Choose the material form',
          blocks: [
            {
              type: 'paragraph',
              body: 'Select the material form for this load so Safi knows what it is analysing.',
            },
          ],
        },
        {
          title: 'Turn on Offline mode if signal is weak',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              body: 'If your site has weak data or signal, turn on **Offline mode**. Photos are stored safely on your phone and can be uploaded over Wi-Fi later — so you are never blocked by connectivity in the yard.',
            },
          ],
        },
        {
          title: 'Open the camera',
          blocks: [
            {
              type: 'paragraph',
              body: 'Tap **Open camera** to start photographing the material.',
            },
          ],
        },
      ],
    },
    {
      id: 'capture-photos',
      heading: 'Capture photos of the material',
      steps: [
        {
          title: 'Frame the material',
          blocks: [
            {
              type: 'paragraph',
              body: 'Stand in front of the material and point the camera towards it. Safi guides you to the correct distance and angle, then takes the photo automatically once the framing is right.',
            },
            {
              type: 'media',
              media: {
                kind: 'gif',
                alt: 'Camera view with the on-screen frame guiding the operator to the correct distance and angle.',
                caption: 'Safi guides you to the right distance and angle before capturing.',
              },
            },
          ],
        },
        {
          title: 'Choose automatic or manual capture',
          blocks: [
            {
              type: 'paragraph',
              body: 'Safi supports both automatic and manual capture.',
            },
            {
              type: 'callout',
              variant: 'note',
              body: 'We recommend **Automatic Capture** for a fast, seamless workflow. **Settings** (such as Offline mode and alert vibrations) and **Flash** for low-light or night shifts are in the top-right corner of the camera.',
            },
          ],
        },
      ],
    },
    {
      id: 'best-coverage',
      heading: 'Get the best coverage',
      blocks: [
        {
          type: 'callout',
          variant: 'important',
          body: 'For the most accurate results, capture **at least 10 photos per load**. Avoid the highly compressed side of the bale and focus on the flatter bale faces.',
        },
        {
          type: 'media',
          media: {
            kind: 'screenshot',
            alt: 'Diagram showing the flat faces of a bale to photograph versus the compressed side to avoid.',
            caption: 'Photograph the flatter faces; avoid the compressed side.',
          },
        },
      ],
    },
    {
      id: 'review-library',
      heading: 'Review photos in the library',
      steps: [
        {
          title: 'Open the photo library',
          blocks: [
            {
              type: 'paragraph',
              body: 'You can review your photos at any time in the photo library.',
            },
            {
              type: 'callout',
              variant: 'note',
              body: 'If an issue is detected, a **red or yellow indicator** appears next to the library button and on the affected photo. Red flags an error; yellow flags a warning.',
            },
          ],
        },
      ],
    },
    {
      id: 'complete-report',
      heading: 'Complete the report',
      steps: [
        {
          title: 'Generate your AI analysis',
          blocks: [
            {
              type: 'paragraph',
              body: 'Once you are happy with the photo coverage, complete the report to generate your AI analysis.',
            },
            {
              type: 'callout',
              variant: 'note',
              body: 'Photos captured in Offline mode can be uploaded later over Wi-Fi — either from the report page or from the Quality Control home page.',
            },
          ],
        },
      ],
    },
    {
      id: 'read-results',
      heading: 'Read your AI results',
      steps: [
        {
          title: 'Review the composition table',
          blocks: [
            {
              type: 'paragraph',
              body: 'Once the photos are analysed, the composition table compares the material specifications set up in Settings against the AI’s actual results.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Composition table comparing target material specifications against AI results, with in-spec and out-of-spec rows.',
                caption: 'The composition table: target spec vs. AI result.',
              },
            },
          ],
        },
        {
          title: 'Explore the analysed photos',
          blocks: [
            {
              type: 'paragraph',
              body: 'Open the report and go to the **Photos** tab, then select **AI Bale** to see every photo from the session. Safi shows the analysed bale outline and the materials it detected — toggle each material on and off to inspect it.',
            },
          ],
        },
        {
          title: 'Flag an AI detection issue',
          blocks: [
            {
              type: 'paragraph',
              body: 'If you spot a problem — for example the wrong object was detected — press and hold on the photo and leave a comment. It goes directly to our machine learning team to keep improving your site’s data.',
            },
          ],
        },
        {
          title: 'Upload device photos (optional)',
          blocks: [
            {
              type: 'paragraph',
              body: 'You can also upload photos from your device to be analysed — during the set-up steps, or from the report’s photo library using the upload button.',
            },
          ],
        },
      ],
    },
    {
      id: 'share-and-export',
      heading: 'Share and export',
      steps: [
        {
          title: 'Share or download the report',
          blocks: [
            {
              type: 'paragraph',
              body: 'Reports can be shared with colleagues, and you can download a PDF containing all of the photos and the data.',
            },
          ],
        },
      ],
    },
    {
      id: 'create-loads-on-arrival',
      heading: 'Creating loads on arrival',
      blocks: [
        {
          type: 'paragraph',
          body: 'If your site doesn’t import loads into Safi in advance, you can create loads as they arrive at the yard. In **Quality**, select **Create load**.',
        },
        {
          type: 'callout',
          variant: 'important',
          body: 'Always choose the correct **material specification** so your reports have meaningful context — we cover this in a separate guide.',
        },
      ],
    },
  ],
};
