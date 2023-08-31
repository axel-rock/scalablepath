<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>Contact</h1>

<form method="POST">
    <label for="email">Your email</label>
    <input type="email" id="email" name="email" placeholder="john@doe.com">
    <label for="message">Your message</label>
    <input type="text" id="message" name="message" placeholder="What do you want to tell us?">
    <button type="submit">Send</button>
</form>