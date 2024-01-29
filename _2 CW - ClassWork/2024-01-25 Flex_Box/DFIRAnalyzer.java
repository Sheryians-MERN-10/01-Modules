import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DFIRAnalyzer {

    public static void main(String[] args) {
        String filePath = "your_file.txt"; // Replace with the actual file path
        String resultFlag = extractSensitiveData(filePath);

        // Print the result flag
        System.out.println(resultFlag);
    }

    public static String extractSensitiveData(String filePath) {
        StringBuilder content = new StringBuilder();

        // Read file content
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }

        // Regular expressions for pattern matching
        Pattern ssnPattern = Pattern.compile("\\b\\d{3}-\\d{2}-\\d{4}\\b");
        Pattern ccPattern = Pattern.compile("\\b\\d{16}\\b");
        Pattern emailPattern = Pattern.compile("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");
        Pattern phonePattern = Pattern.compile("\\b\\(\\d{3}\\) \\d{3}-\\d{4}\\b");

        // Matcher for finding patterns
        Matcher ssnMatcher = ssnPattern.matcher(content);
        Matcher ccMatcher = ccPattern.matcher(content);
        Matcher emailMatcher = emailPattern.matcher(content);
        Matcher phoneMatcher = phonePattern.matcher(content);

        // Find and capture the last character of each type of sensitive data
        String lastSSN = findLastMatch(ssnMatcher);
        String lastCreditCard = findLastMatch(ccMatcher);
        String lastEmail = findLastMatch(emailMatcher);
        String lastPhone = findLastMatch(phoneMatcher);

        // Form the Flag
        return String.format("HQ8{%s%s%s%s}", lastSSN, lastCreditCard, lastEmail, lastPhone);
    }

    private static String findLastMatch(Matcher matcher) {
        String lastMatch = "";
        while (matcher.find()) {
            lastMatch = matcher.group();
        }
        return lastMatch.isEmpty() ? "" : String.valueOf(lastMatch.charAt(lastMatch.length() - 1));
    }
}
