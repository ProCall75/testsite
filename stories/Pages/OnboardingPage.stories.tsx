import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(app)/onboarding/page";

const meta: Meta<typeof Page> = {
  title: "Pages/Onboarding",
  component: Page,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Default: StoryObj<typeof Page> = {};
