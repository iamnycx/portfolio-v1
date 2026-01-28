/**
 * SVG Data Extractor
 *
 * Usage:
 * 1. Save your original JSX component to a file
 * 2. Run: node extractSVGToData.js <input-file> <output-file>
 * 3. Import the generated data in your component
 */

const fs = require("fs");
const path = require("path");

function extractTextElements(svgContent) {
  // Pattern to match text elements with content on same or next line
  const pattern =
    /<text\s+x="([^"]+)"\s+y="([^"]+)"\s+fill="([^"]+)">\s*([^<\s]+)\s*<\/text>/g;

  const elements = [];
  let match;

  while ((match = pattern.exec(svgContent)) !== null) {
    elements.push({
      x: parseFloat(match[1]),
      y: parseFloat(match[2]),
      fill: match[3],
      char: match[4].trim(),
    });
  }

  return elements;
}

function groupByRow(elements) {
  const rows = {};

  elements.forEach((el) => {
    const rowKey = el.y;
    if (!rows[rowKey]) {
      rows[rowKey] = [];
    }
    rows[rowKey].push(el);
  });

  return rows;
}

function generateJSFile(elements) {
  const rows = groupByRow(elements);
  const sortedYValues = Object.keys(rows)
    .map(parseFloat)
    .sort((a, b) => a - b);

  let output = `// Auto-generated avatar data
// Total elements: ${elements.length}
// Rows: ${sortedYValues.length}

export const avatarData = [\n`;

  sortedYValues.forEach((y, rowIndex) => {
    output += `  // Row ${rowIndex + 1} (y: ${y})\n`;
    rows[y].forEach((el, elIndex) => {
      const comma =
        rowIndex === sortedYValues.length - 1 && elIndex === rows[y].length - 1
          ? ""
          : ",";
      output += `  { x: ${el.x}, y: ${el.y}, fill: "${el.fill}", char: "${el.char}" }${comma}\n`;
    });
    output += "\n";
  });

  output += "];\n";

  return output;
}

// Main execution
function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log("Usage: node extractSVGToData.js <input-file> [output-file]");
    console.log(
      "Example: node extractSVGToData.js AsciiAvatar.jsx avatarData.js",
    );
    process.exit(1);
  }

  const inputFile = args[0];
  const outputFile = args[1] || "avatarData.js";

  console.log(`Reading from: ${inputFile}`);

  // Read the input file
  let content;
  try {
    content = fs.readFileSync(inputFile, "utf8");
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }

  // Extract elements
  console.log("Extracting text elements...");
  const elements = extractTextElements(content);
  console.log(`Found ${elements.length} text elements`);

  if (elements.length === 0) {
    console.error("No text elements found! Check the input file format.");
    process.exit(1);
  }

  // Generate output
  console.log("Generating JavaScript file...");
  const output = generateJSFile(elements);

  // Write output
  try {
    fs.writeFileSync(outputFile, output, "utf8");
    console.log(`✓ Successfully wrote to: ${outputFile}`);
    console.log(`  Total elements: ${elements.length}`);
    console.log(`  File size: ${(output.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { extractTextElements, generateJSFile };
