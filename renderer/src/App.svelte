<script>
    import { version } from '../../package.json';
</script>

<main>
</main>

<footer>
    <p>&copy; The Miner Got Help | {version}</p>
</footer>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 95vh;
        background-color: #121212;
        color: #ffffff;

        h1 {
            font-family: 'Arial', sans-serif;
        }
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5vh;
        background-color: #1e1e1e;
        color: #888888;
        font-size: 0.9rem;
    }
</style>