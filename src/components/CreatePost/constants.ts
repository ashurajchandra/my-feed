const OPTIONS = [
        {
            id: 1,
            name: 'Paragraph',
            value: 'paragraph'
        },
        {
            id: 2,
            name: 'Heading 1',
            value: 'heading1'
        },
        {
            id: 3,
            name: 'Heading 2',
            value: 'heading2'
        },
        {
            id: 4,
            name: 'Heading 3',
            value: 'heading3'
        }
    
]

const PLACEHOLDER={
    TEXT_AREA_PLACEHOLDER: "How are you feeling today?",
}

const FORMATTING_OPTIONS={
   PARAGRAPH: 'Paragraph',
   HEADING_1: 'Heading 1',
   HEADING_2: 'Heading 2',
   HEADING_3: 'Heading 3',
   UNORDERED_LIST: 'unordered',
   ORDERED_LIST: 'ordered',
   NONE: 'none',
}

const TOOLBAR_BUTTONS = [
    {
        id: 'bold',
        type: 'format',
        formatKey: 'isBold',
        icon: 'TEXT_BOLD_ICON',
        title: 'Bold (Ctrl+B)',
        onClick: 'toggleFormat'
    },
    {
        id: 'italic',
        type: 'format',
        formatKey: 'isItalic',
        icon: 'TEXT_ITALIC_ICON',
        title: 'Italic (Ctrl+I)',
        onClick: 'toggleFormat'
    },
    {
        id: 'underline',
        type: 'format',
        formatKey: 'isUnderline',
        icon: 'TEXT_UNDERLINE_ICON',
        title: 'Underline (Ctrl+U)',
        onClick: 'toggleFormat'
    },
    {
        id: 'separator-1',
        type: 'separator'
    },
    {
        id: 'unordered-list',
        type: 'list',
        formatKey: 'unordered',
        icon: 'LIST_UNORDERED_ICON',
        title: 'Unordered List',
        onClick: 'alert'
    },
    {
        id: 'ordered-list',
        type: 'list',
        formatKey: 'ordered',
        icon: 'LIST_ORDERED_ICON',
        title: 'Ordered List',
        onClick: 'alert'
    },
    {
        id: 'separator-2',
        type: 'separator'
    },
    {
        id: 'quote',
        type: 'action',
        icon: 'QUOTE_ICON',
        title: 'Quote',
        onClick: 'alert'
    },
    {
        id: 'code',
        type: 'action',
        icon: 'SCRIPT_ICON',
        title: 'Code',
        onClick: 'alert'
    }
]

const BOTTOM_ACTION_BUTTONS = [
    {
        id: 'attachment',
        type: 'action',
        icon: 'ADD_ICON',
        title: 'Add Attachment',
        onClick: 'alert'
    },
    {
        id: 'microphone',
        type: 'action',
        icon: 'MIC_ICON',
        title: 'Voice Input',
        onClick: 'alert'
    },
    {
        id: 'camera',
        type: 'action',
        icon: 'MEDIA_ICON',
        title: 'Add Photo/Video',
        onClick: 'alert'
    }
]

const TOP_RIGHT_BUTTONS = [
    {
        id: 'trash',
        type: 'action',
        icon: 'TRASH_ICON',
        title: 'Clear Post',
        onClick: 'clearPost'
    }
]

const BOTTOM_RIGHT_BUTTONS = [
    {
        id: 'send',
        type: 'action',
        icon: 'SEND_ICON',
        title: 'Send Post',
        onClick: 'submitPost',
        disabled: true // This will be handled dynamically
    }
]

export {OPTIONS, PLACEHOLDER, FORMATTING_OPTIONS, TOOLBAR_BUTTONS, BOTTOM_ACTION_BUTTONS, TOP_RIGHT_BUTTONS, BOTTOM_RIGHT_BUTTONS};