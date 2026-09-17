#!/usr/bin/env ruby
# frozen_string_literal: true

SOURCE_EXTENSIONS = %w[.css .html .js .rb .tsx .yaml .yml].freeze
EXCLUDED_DIRECTORIES = %w[.git _site node_modules vendor].freeze

files = Dir.glob('**/*', File::FNM_DOTMATCH).select do |path|
    next false unless File.file?(path)
    next false if path.split(File::SEPARATOR).any? { |part| EXCLUDED_DIRECTORIES.include?(part) }

    SOURCE_EXTENSIONS.include?(File.extname(path))
end

violations = []

files.each do |path|
    File.foreach(path).with_index(1) do |line, line_number|
        if line.start_with?("\t")
            violations << "#{path}:#{line_number}: tabs are not allowed for indentation"
            next
        end

        indentation = line[/\A +/]
        next unless indentation && (indentation.length % 4).positive?

        violations << "#{path}:#{line_number}: indentation must use a multiple of four spaces"
    end
end

if violations.empty?
    puts "Indentation check passed for #{files.length} source files."
    exit 0
end

warn violations.join("\n")
warn "\n#{violations.length} indentation violation(s) found."
exit 1
