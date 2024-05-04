elements.money = {
    color: "#00e600",
    behavior: behaviors.POWDER,
    category: "powders",
};

elements.paper = {
    color: "#ffffff",
    behavior: behaviors.solid,
    category: "solids",
};

elements.shredded_paper = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "powders",
};

elements.shredded_money = {
    color: "#004d00",
    behavior: behaviors.POWDER,
    category: "powders",
};

elements.shredder = {
    color: "#08b508",
    tool: function(pixel) {
        if (pixel.element == "money") {
            pixel.element = "shredded_money"
        },
        if (pixel.element == "paper") {
            pixel.element = "shredded_money"
        }
    },
    category: "tools",
};
