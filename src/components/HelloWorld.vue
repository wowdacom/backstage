<template>
  <div class="hello">
    <div class="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">標題</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="書名">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">副標題</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="相關描述">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">文章內容</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" disabled>發送</button>
        <div class="text-area">
          <h1>My Text Event</h1>
          <p>Capacity: {{ capacity }}</p>
          <button @click="increaseCapacity()">Increase Capacity</button>
        </div>
      </form>
    </div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
          <img src='http://fakeimg.pl/500x500?text=Hello%20Img&font=lobster' alt=''/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla blanditiis libero ipsum itaque eos ad laudantium. Facere dolores, sequi suscipit dolorem molestiae ipsa sed placeat, amet omnis necessitatibus laborum porro! Nam quia unde animi debitis repellat, architecto enim in maxime blanditiis soluta consectetur doloribus tempora. Debitis vero tempore alias.
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
          <img src='http://fakeimg.pl/500x500?text=Hello%20Img&font=lobster' alt=''/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla blanditiis libero ipsum itaque eos ad laudantium. Facere dolores, sequi suscipit dolorem molestiae ipsa sed placeat, amet omnis necessitatibus laborum porro! Nam quia unde animi debitis repellat, architecto enim in maxime blanditiis soluta consectetur doloribus tempora. Debitis vero tempore alias.
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
          <img src='http://fakeimg.pl/500x500?text=Hello%20Img&font=lobster' alt=''/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla blanditiis libero ipsum itaque eos ad laudantium. Facere dolores, sequi suscipit dolorem molestiae ipsa sed placeat, amet omnis necessitatibus laborum porro! Nam quia unde animi debitis repellat, architecto enim in maxime blanditiis soluta consectetur doloribus tempora. Debitis vero tempore alias.
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
          <img src='http://fakeimg.pl/500x500?text=Hello%20Img&font=lobster' alt=''/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla blanditiis libero ipsum itaque eos ad laudantium. Facere dolores, sequi suscipit dolorem molestiae ipsa sed placeat, amet omnis necessitatibus laborum porro! Nam quia unde animi debitis repellat, architecto enim in maxime blanditiis soluta consectetur doloribus tempora. Debitis vero tempore alias.
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
          <img src='http://fakeimg.pl/500x500?text=Hello%20Img&font=lobster' alt=''/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla blanditiis libero ipsum itaque eos ad laudantium. Facere dolores, sequi suscipit dolorem molestiae ipsa sed placeat, amet omnis necessitatibus laborum porro! Nam quia unde animi debitis repellat, architecto enim in maxime blanditiis soluta consectetur doloribus tempora. Debitis vero tempore alias.
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2">
          <img src='http://fakeimg.pl/500x500?text=Hello%20Img&font=lobster' alt=''/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla blanditiis libero ipsum itaque eos ad laudantium. Facere dolores, sequi suscipit dolorem molestiae ipsa sed placeat, amet omnis necessitatibus laborum porro! Nam quia unde animi debitis repellat, architecto enim in maxime blanditiis soluta consectetur doloribus tempora. Debitis vero tempore alias.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const capacity = ref(3);

    function increaseCapacity() { 
      capacity.value++;
    }
    return { capacity, increaseCapacity };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 100%;
}
</style>
