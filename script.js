// {
//     "HighPriority": {
//       "HazardousWaste": ["Chemical Waste", "Medical Waste", "E-Waste", "Radioactive Waste"],
//       "BiodegradableWaste": ["Food Waste", "Agricultural Waste", "Sewage"]
//     },
//     "MediumPriority": {
//       "RecyclableWaste": ["Plastic", "Glass", "Paper", "Metals"],
//       "Non-BiodegradableWaste": ["Styrofoam", "Synthetic Fabrics", "Rubber"]
//     },
//     "LowPriority": {
//       "GeneralWaste": ["Household Trash", "Packaging Waste", "Street Litter"],
//       "ConstructionWaste": ["Bricks", "Cement", "Wood Scraps"]
//     }
//   }

let higher_priority = ["Chemical Waste", "Medical Waste", "E-Waste", "Radioactive Waste"];
let medium_priority = ["Plastic", "Glass", "Paper", "Metals"];
let lower_priority = ["Household Trash", "Packaging Waste", "Street Litter"];

// Function to generate a random credit score within a given range
function getRandomCredit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let item = prompt("Enter the category: "); // User input
let found = false;

// Check in higher priority waste
for (let i = 0; i < higher_priority.length; i++) {
    if (higher_priority[i] === item) {
        console.log("This is a high-priority waste item.");
        alert("Credit Score: " + getRandomCredit(80, 100));
        found = true;
        break;
    }
}

// Check in medium priority waste if not found
if (!found) {
    for (let i = 0; i < medium_priority.length; i++) {
        if (medium_priority[i] === item) {
            console.log("This is a medium-priority waste item.");
            alert("Credit Score: " + getRandomCredit(50, 79));
            found = true;
            break;
        }
    }
}

// Check in lower priority waste if not found
if (!found) {
    for (let i = 0; i < lower_priority.length; i++) {
        if (lower_priority[i] === item) {
            console.log("This is a low-priority waste item.");
            alert("Credit Score: " + getRandomCredit(10, 49));
            found = true;
            break;
        }
    }
}

// If not found in any category
if (!found) {
    console.log("Category not recognized. Please enter a valid waste category.");
}
