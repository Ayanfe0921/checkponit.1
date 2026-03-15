def analyze_sentence():
    char_count = 0
    word_count = 0
    vowel_count = 0
    vowels = 'aeiouAEIOU'

    while True:
        char = input("Enter a character: ")
        char_count += 1
        if char == ' ':
            word_count += 1
        elif char.lower() in vowels:
            vowel_count += 1
        if char == '.':
            break

    word_count += 1  # count the last word

    print(f"[1] Length of sentence: {char_count} characters")
    print(f"[2] Number of words: {word_count}")
    print(f"[3] Number of vowels: {vowel_count}")

analyze_sentence()