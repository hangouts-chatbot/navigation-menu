import { CardMessage } from "../src/hangoutsCardMsgBuilder";

const expectedExample1 = {
    "cards": [
        {
            "sections": [
                {
                    "widgets": [
                        {
                            "textParagraph": {
                                "text": "My Text Paragraph"
                            }
                        }
                    ]
                },
                {
                    "widgets": [
                        {
                            "buttons": [
                                {
                                    "imageButton": {
                                        "iconUrl": "My Image Icon Url",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "image-button-action"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "My Text Button",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "text-button-action"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

test("Test CardMsgBuilder with example 1", () => {
    const cardMsg = new CardMessage();
    cardMsg.addSection().addTextParagraphWidget("My Text Paragraph")
    cardMsg.addSection().addButtonsWidget().addImageButton("My Image Icon Url", "image-button-action").addTextButton("My Text Button", "text-button-action");
    expect(cardMsg.value()).toStrictEqual(expectedExample1);
});
