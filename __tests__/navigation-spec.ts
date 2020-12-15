import { INavigationGraph, Navigation } from '../src/navigation';

const example1: INavigationGraph = {
    "home": {
        "text": "Welcome to ${ENV_REGION} SOS-Bot!",
        "children": [
            "account-management",
            "partner-management",
            "rfp-rfi"
        ],
        "parent": null
    },
    "account-management": {
        "text": "Account Management",
        "children": [
            "account-creation",
            "account-segmentation",
            "account-maintenance"
        ],
        "parent": "home"
    },
    "partner-management": {
        "text": "Partner Management",
        "children": ["rfp-rfi"],
        "parent": "home"
    },
    "rfp-rfi": {
        "text": "RFP/RFI",
        "children": [],
        "parent": "partner-management"
    }
}

const expectedCard1 = {
    "cards": [
        {
            "sections": [
                {
                    "widgets": [
                        {
                            "textParagraph": {
                                "text": "Welcome to ${ENV_REGION} SOS-Bot!"
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
                                        "iconUrl": "",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "account-management"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "Account Management",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "account-management"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "widgets": [
                        {
                            "buttons": [
                                {
                                    "imageButton": {
                                        "iconUrl": "",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "partner-management"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "Partner Management",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "partner-management"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "widgets": [
                        {
                            "buttons": [
                                {
                                    "imageButton": {
                                        "iconUrl": "",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "rfp-rfi"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "RFP/RFI",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "rfp-rfi"
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

const expectedCard2 = {
    "cards": [
        {
            "sections": [
                {
                    "widgets": [
                        {
                            "textParagraph": {
                                "text": "Account Management"
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
                                        "iconUrl": "",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "home"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "Back",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "home"
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

const expectedCard3 = {
    "cards": [
        {
            "sections": [
                {
                    "widgets": [
                        {
                            "textParagraph": {
                                "text": "Partner Management"
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
                                        "iconUrl": "",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "rfp-rfi"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "RFP/RFI",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "rfp-rfi"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "widgets": [
                        {
                            "buttons": [
                                {
                                    "imageButton": {
                                        "iconUrl": "",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "home"
                                            }
                                        }
                                    }
                                },
                                {
                                    "textButton": {
                                        "text": "Back",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": "home"
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


test("test top-level navigation 'home'", () => {
    const navigation = new Navigation(example1);
    expect(navigation.getCardMessage("home")).toStrictEqual(expectedCard1);
})

test("test sub-level navigation 'account-management'", () => {
    const navigation = new Navigation(example1);
    expect(navigation.getCardMessage("account-management")).toStrictEqual(expectedCard2);
})

test("test sub-level navigation 'partner-management' which has children", () => {
    const navigation = new Navigation(example1);
    expect(navigation.getCardMessage("partner-management")).toStrictEqual(expectedCard3);
})

test("test with non-exist key", () => {
    const navigation = new Navigation(example1);
    expect(navigation.getCardMessage("do-not-exist")).toBe(null);
})