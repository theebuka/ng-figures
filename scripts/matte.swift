// Cuts the people out of a photograph with the macOS Vision framework and
// writes the result as a greyscale mask (white = person).
// Usage: swift scripts/matte.swift <photo> <mask.png>
import AppKit
import CoreImage
import Vision

let args = CommandLine.arguments
guard args.count == 3, let source = CIImage(contentsOf: URL(fileURLWithPath: args[1])) else {
  FileHandle.standardError.write("usage: swift scripts/matte.swift <photo> <mask.png>\n".data(using: .utf8)!)
  exit(1)
}

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8

try VNImageRequestHandler(ciImage: source).perform([request])
guard let buffer = request.results?.first?.pixelBuffer else {
  FileHandle.standardError.write("No person found in \(args[1])\n".data(using: .utf8)!)
  exit(1)
}

// The mask comes back at the model's own size, so stretch it to the photograph.
let mask = CIImage(cvPixelBuffer: buffer)
let scaled = mask.transformed(by: CGAffineTransform(scaleX: source.extent.width / mask.extent.width, y: source.extent.height / mask.extent.height))
let context = CIContext()
try context.writePNGRepresentation(of: scaled, to: URL(fileURLWithPath: args[2]), format: .L8, colorSpace: CGColorSpaceCreateDeviceGray())
