// TODO: Replace YOUR_SPACE and YOUR_CHATFLOW_ID with your own values below
async function query(data) {
  const response = await fetch(
    "https://api.chatbot.com/spaces/YOUR_SPACE/chatflows/YOUR_CHATFLOW_ID/query",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  const result = await response.json();
  return result;
}

function renderMarkdown(md) {
  // Use marked.js for full markdown support
  if (window.marked) {
    return window.marked.parse(md);
  }
  // fallback: basic markdown to HTML conversion
  let html = md
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // bold
    .replace(/\*(.*?)\*/g, '<i>$1</i>') // italics
    .replace(/`([^`]+)`/g, '<code>$1</code>') // inline code
    .replace(/\n/g, '<br>'); // line breaks
  // Table: convert markdown table to HTML table (basic)
  if (/^\s*\|.*\|/m.test(md)) {
    html = html.replace(/((?:^\s*\|.*\|\s*\n?)+)/gm, function(table) {
      const rows = table.trim().split(/\n/).filter(Boolean);
      if (rows.length < 2) return table; // not a table
      const header = rows[0].replace(/\|/g, ' ').trim().split(/\s{2,}/);
      const aligns = rows[1];
      const bodyRows = rows.slice(2).map(r => r.replace(/\|/g, ' ').trim().split(/\s{2,}/));
      let htmlTable = '<table class="chat-table"><thead><tr>';
      header.forEach(h => htmlTable += `<th>${h}</th>`);
      htmlTable += '</tr></thead><tbody>';
      bodyRows.forEach(row => {
        htmlTable += '<tr>';
        row.forEach(cell => htmlTable += `<td>${cell}</td>`);
        htmlTable += '</tr>';
      });
      htmlTable += '</tbody></table>';
      return htmlTable;
    });
  }
  return html;
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const errorDiv = document.getElementById('chat-error');
  const chatbotContainer = document.querySelector('.chatbot-container');
  const minimizeBtn = document.querySelector('.chatbot-minimize-btn');
  const toggleBtn = document.querySelector('.chatbot-toggle-btn');

  // Check if chatbot has been opened before
  const chatbotOpened = localStorage.getItem('chatbotOpened');
  
  // If first time or chatbot was closed, keep it minimized
  if (!chatbotOpened || chatbotOpened === 'false') {
    if (chatbotContainer) {
      chatbotContainer.classList.add('minimized');
    }
    if (toggleBtn) {
      toggleBtn.classList.add('visible');
    }
  } else {
    // If chatbot was opened before, keep it open
    if (chatbotContainer) {
      chatbotContainer.classList.remove('minimized');
      chatbotContainer.classList.add('open');
    }
    if (toggleBtn) {
      toggleBtn.classList.remove('visible');
    }
  }

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userMsg = input.value.trim();
    if (!userMsg) return;

    messages.innerHTML += `<div class='chat-msg user'><b>You:</b> ${userMsg}</div>`;
    input.value = '';
    errorDiv.textContent = '';

    try {
      messages.innerHTML += `<div class='chat-msg bot' style='color:#888;'>Chatbot is typing...</div>`;
      const response = await query({"question": userMsg});
      let botMsg = response.text || JSON.stringify(response);
      messages.innerHTML = messages.innerHTML.replace('Chatbot is typing...','');
      messages.innerHTML += `<div class='chat-msg bot'><b>Chatbot:</b> ${renderMarkdown(botMsg)}</div>`;
      messages.scrollTop = messages.scrollHeight;
    } catch (err) {
      errorDiv.textContent = 'Sorry, there was a problem contacting Chatbot.';
    }
  });

  // Handle minimize button
  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', function() {
      chatbotContainer.classList.add('minimized');
      chatbotContainer.classList.remove('open');
      if (toggleBtn) {
        toggleBtn.classList.add('visible');
      }
      localStorage.setItem('chatbotOpened', 'false');
    });
  }

  // Handle toggle button (maximize)
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      chatbotContainer.classList.remove('minimized');
      chatbotContainer.classList.add('open');
      if (toggleBtn) {
        toggleBtn.classList.remove('visible');
      }
      localStorage.setItem('chatbotOpened', 'true');
      input.focus();
    });
  }

  // Make "Ask the Chatbot" anchors open the chat (anchors like <a href="#chatbot">)
  document.querySelectorAll('a[href="#chatbot"]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      if (chatbotContainer) {
        chatbotContainer.classList.remove('minimized');
        chatbotContainer.classList.add('open');
      }
      if (toggleBtn) {
        toggleBtn.classList.remove('visible');
      }
      localStorage.setItem('chatbotOpened', 'true');
      if (input) input.focus();
    });
  });

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Load marked.js if available for enhanced markdown support
  if (!window.marked && typeof marked === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.async = true;
    document.head.appendChild(script);
  }
});
