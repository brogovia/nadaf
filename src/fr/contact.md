---
layout: base.njk
title: Contactez NADAF - Recyclage Papier & Carton
description: Contactez-nous pour une demande de collecte, des informations sur nos services de recyclage papier et carton, ou toute autre question.
permalink: /fr/contact/
---

<div class="page-header">
  <div class="container">
    <h1>Contactez-nous</h1>
    <p class="page-subtitle">Nous sommes là pour répondre à vos besoins en matière de recyclage.</p>
  </div>
</div>

<div class="container page-content">
  <div class="contact-layout">
    <div class="contact-info">
      <h2>Nos Coordonnées</h2>
      <p>N'hésitez pas à nous contacter pour toute demande d'information ou pour planifier une collecte de vos déchets papier et carton.</p>
      <ul>
        <li><strong>📍 Adresse :</strong><br> [Adresse complète de NADAF à insérer ici],<br> [Ville, Code Postal], Algérie</li> {# Placeholder Address #}
        <li><strong>📞 Téléphone :</strong><br> <a href="tel:+213000000000">[+213 XX XXX XX XX]</a></li> {# Placeholder Phone #}
        <li><strong>📧 Email :</strong><br> <a href="mailto:contact@nadaf.dz">[contact@nadaf.dz]</a></li> {# Placeholder Email #}
        <li><strong>🕒 Horaires :</strong><br> [Jours et heures d'ouverture à insérer ici]<br>(ex: Dimanche - Jeudi : 08h00 - 16h00)</li> {# Placeholder Opening Hours #}
      </ul>
      {# Placeholder for Map #}
      <div class="contact-map">
        <h3>Notre Localisation</h3>
        {# Replace with actual map embed code or static image later #}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.8883394001077!2d7.744770476375813!3d36.67718567462346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f07519326c5731%3A0x3ec501ef9793e44a!2sSARL%20NADAF%20ECORECUP!5e0!3m2!1sfr!2sfr!4v1744588438050!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Carte de localisation NADAF">
        </iframe>
      </div>
    </div>
    <div class="contact-form-section">
      <h2>Envoyez-nous un message</h2>
      <p>Remplissez le formulaire ci-dessous pour une demande rapide. Nous vous répondrons dans les plus brefs délais.</p>
      <form class="contact-form" action="[YOUR_FORM_ENDPOINT]" method="POST"> {# Placeholder for form action #}
        {# Add Netlify form handling attributes if using Netlify #}
        {# <form name="contact" method="POST" data-netlify="true"> #}

        <div class="form-group">
          <label for="name">Nom et Prénom :</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
          <label for="company">Entreprise (facultatif) :</label>
          <input type="text" id="company" name="company">
        </div>

        <div class="form-group">
          <label for="email">Email :</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
          <label for="phone">Téléphone :</label>
          <input type="tel" id="phone" name="phone" required>
        </div>

        <div class="form-group">
          <label for="subject">Sujet / Type de déchet :</label>
          <input type="text" id="subject" name="subject" required>
        </div>

        <div class="form-group">
          <label for="message">Votre message :</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>

        {# Netlify hidden field for form name #}
        {# <input type="hidden" name="form-name" value="contact"> #}

        <button type="submit" class="button">Envoyer le Message</button>

      </form>
    </div>

  </div>
</div>
