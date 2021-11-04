const find = (selector, context=document.body, arr=[]) => {
    
    console.log([...context.children]);
    [...context.children].forEach((child) => {
      if (child.matches(selector)) {
        arr.push(child);
      }
      find(selector, child, arr);
    });
    return arr;
  };
  
  console.log(find('div.a_class#an_id'));
  console.log(find('.div-Hello'));