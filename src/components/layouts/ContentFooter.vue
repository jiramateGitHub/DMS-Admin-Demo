<template>
  <div>
    <footer class="footer">
      <div class="container-fluid">
        <nav class="float-left">
          <ul>
            <li>
              <a href="" target="_blank"> About Us </a>
            </li>
          </ul>
        </nav>
        <div class="copyright float-right">
          COPYRIGHT © 2020 - 2021
          <a href="" target="_blank">PROJECT.</a> ALL
          RIGHTS RESERVED
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>