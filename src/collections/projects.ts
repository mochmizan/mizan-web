import type { CollectionConfig } from "payload";

export const Project: CollectionConfig = {
    slug: "project",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "url",
            type: "text",
        },
        {
            name: "desc",
            type: "text",
        }
    ],

};