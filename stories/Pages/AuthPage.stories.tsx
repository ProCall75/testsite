import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(marketing)/inscription/page";

const meta: Meta<typeof Page> = {
  title: "Pages/Auth",
  component: Page,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Default: StoryObj<typeof Page> = {};
