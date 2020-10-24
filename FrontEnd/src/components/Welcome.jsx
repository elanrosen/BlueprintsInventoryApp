import React from 'react';
import {
  Link,
} from 'react-router-dom';

class Stats extends React.Component {
  render() {
    return (
    <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-6xl mt-2 mb-6 leading-tight font-heading">Welcome</h2>
      <p class="mb-8 text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, eos ridens copiosae id. Ne his dicta error expetenda. Sed in augue fabulas adversarium. Duo ad congue causae senserit, verear nostrum id nam. Vix quis autem commodo ei, enim nihil imperdiet in vix. Ad eum quod nonumes.</p>
      <div><a class="inline-block py-4 px-8 mr-6 leading-none text-white 
      bg-blue-600 hover:bg-blue-700 rounded shadow" href="#">Let's begin</a></div>
    </div>
    </section>
    );
  }
}

export default Stats;
