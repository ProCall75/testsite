import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(app)/tableau-de-bord/page";

const meta: Meta<typeof Page> = {
  title: "Pages/Dashboard",
  component: Page,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Default: StoryObj<typeof Page> = {};
