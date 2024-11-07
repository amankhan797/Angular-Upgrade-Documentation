document.querySelectorAll('pre code').forEach((codeBlock) => {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.classList.add('copy-btn');
    codeBlock.parentElement.appendChild(copyButton);

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent)
            .then(() => {
                alert('Command copied to clipboard!');
            })
            .catch((error) => {
                console.error('Failed to copy command: ', error);
            });
    });
});
