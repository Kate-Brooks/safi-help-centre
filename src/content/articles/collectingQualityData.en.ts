import type { ArticleContent } from '../types';

/**
 * English content for "Collecting quality data".
 * Structure follows the approved draft + June 2026 screenshot revisions.
 * Section ids are stable across locales so anchor links survive a language switch.
 *
 * Screenshots live in /public/screenshots/collecting-quality-data/ and are
 * referenced by relative path; missing files fall back to a placeholder.
 */
export const collectingQualityDataEn: ArticleContent = {
  title: 'Collecting quality data',
  summary:
    'Use Safi AI to analyse material quality, generate an AI quality report and review the results against your material specifications.',
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
      display: 'alert',
      blocks: [
        {
          type: 'paragraph',
          body: 'Download the [Safi AI app](https://apps.apple.com/gb/app/safi-ai/id6757709968) from the App Store. We recommend using an **iPhone 14 Pro or newer** for best performance.',
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Start an analysis',
      steps: [
        {
          title: 'Open the app and go to Quality Control',
          blocks: [
            {
              type: 'paragraph',
              body: 'If the load already exists, find it and tap **Analyse now**, or open the load to see its details and tap **Analyse** at the bottom.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Quality Control load list with the Analyse now action on a load.',
                src: 'screenshots/collecting-quality-data/01-analyse.png',
              },
            },
          ],
        },
        {
          title: 'Set-up & open camera',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Choose the material form.',
                'Turn on Offline mode if signal is weak.',
                'Open the camera to start photographing the material.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Offline mode safely stores photos on your phone and they can be uploaded over Wi-Fi later, so you don’t have to worry about losing photos.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Camera set-up screen with the material form, Offline mode toggle and Open camera button.',
                src: 'screenshots/collecting-quality-data/02-set-up.png',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'taking-photos',
      heading: 'Taking photos of the material',
      steps: [
        {
          title: 'Frame the material',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Stand in front of the material, pointing the camera towards it.',
                'Safi guides you to the correct distance and angle, then takes the photo automatically once the framing is right.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Camera guiding the operator to the correct distance and angle to frame the bale.',
                src: 'screenshots/collecting-quality-data/03-framing.png',
              },
            },
          ],
        },
        {
          title: 'Choose automatic or manual capture',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              body: 'We recommend **Automatic Capture** for a fast, seamless workflow.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Camera screen with the Automatic and Manual capture toggle.',
                src: 'screenshots/collecting-quality-data/04-auto-manual.png',
              },
            },
          ],
        },
        {
          title: 'Photo library',
          blocks: [
            {
              type: 'list',
              items: [
                'You can review photos here at any time.',
                'If an issue is detected, a red or yellow indicator appears next to the library button and on the affected photo in the library view.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Photo library showing the analysed photos with AI status indicators.',
                src: 'screenshots/collecting-quality-data/05-library.png',
              },
            },
          ],
        },
        {
          title: 'Camera settings & tools',
          blocks: [
            {
              type: 'list',
              items: [
                'Settings such as Offline mode or alert vibrations can be accessed in the top-right corner.',
                'Flash is available for low-light or night-shift environments.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Camera screen with the settings and flash controls in the top-right corner.',
                src: 'screenshots/collecting-quality-data/06-settings.png',
              },
            },
          ],
        },
        {
          title: 'For best coverage',
          blocks: [
            {
              type: 'list',
              items: [
                '**Capture at least 10 photos per load** — the more photos you take, the more representative the AI results are of the load.',
                '**Avoid photographing the highly compressed side of the bale** and focus on the flatter bale faces.',
              ],
            },
          ],
        },
        {
          title: 'Complete the analysis',
          blocks: [
            {
              type: 'paragraph',
              body: 'Once you’re happy with the photo coverage, complete the report to generate your AI analysis.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Completing the analysis to generate the AI report.',
                src: 'screenshots/collecting-quality-data/07-complete.png',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'read-your-results',
      heading: 'Read your results',
      steps: [
        {
          title: 'Review the composition table',
          blocks: [
            {
              type: 'paragraph',
              body: 'Once the photos have been analysed, you’ll see the composition table comparing the material specifications set up in Settings against the actual results of the AI.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Composition table comparing target material specifications against the AI results.',
                src: 'screenshots/collecting-quality-data/08-composition.png',
              },
            },
            {
              type: 'callout',
              variant: 'important',
              body: 'Photos captured in Offline mode can be uploaded later over Wi-Fi, either from the report page or from the Quality Control home page.',
            },
          ],
        },
        {
          title: 'Explore the analysed photos',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Find the load and select the report.',
                'Go to the **Photos** tab.',
                'Select the **AI Bale** album to see the photos taken during the session.',
                'For each photo, the analysed area of the bale outline is shown along with the materials detected by the AI, which you can toggle on and off.',
              ],
            },
            {
              type: 'paragraph',
              body: '**Training the AI on your material**',
            },
            {
              type: 'list',
              items: [
                'If you notice an issue with the AI, such as the wrong object being detected, press and hold on the photo (on mobile) or right-click it (on desktop) to leave a comment.',
                'Your comment goes directly to our machine learning team so we can keep improving your site’s data.',
              ],
            },
          ],
        },
        {
          title: 'Analyse uploaded photos',
          blocks: [
            {
              type: 'list',
              items: [
                'Upload photos from your device to be analysed during the set-up steps,',
                'or via the report’s photo library using the upload button.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Uploading device photos for analysis from the set-up screen.',
                src: 'screenshots/collecting-quality-data/09-upload.png',
              },
            },
          ],
        },
        {
          title: 'Share and download reports',
          blocks: [
            {
              type: 'paragraph',
              body: 'Reports can easily be shared with colleagues, and you can download a PDF of the report containing all of the photos and the data.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Downloading the report as a PDF and sharing it, with the language selector.',
                src: 'screenshots/collecting-quality-data/10-share.png',
              },
            },
          ],
        },
        {
          title: 'Create loads as they arrive',
          blocks: [
            {
              type: 'paragraph',
              body: 'If your site doesn’t import loads into Safi in advance, you can create loads as they arrive at the yard. In **Quality**, select **Create load**. Make sure you choose the correct material specification to give your reports meaningful context — more on that in a separate guide.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Creating a load on arrival and choosing its material specification.',
                src: 'screenshots/collecting-quality-data/11-create-load.png',
              },
            },
          ],
        },
      ],
    },
  ],
};
