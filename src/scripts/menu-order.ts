import { formatOrder, validQuantity, whatsappHref } from '../data/menu-digitale/ordini';
import type { Language } from '../data/menu-digitale/lingue';

document.querySelectorAll<HTMLElement>('[data-order]').forEach(card=>{
  const quantity=card.querySelector<HTMLInputElement>('[data-quantity]')!;
  const additions=card.querySelector<HTMLTextAreaElement>('[data-additions]')!;
  const substitutions=card.querySelector<HTMLTextAreaElement>('[data-substitutions]')!;
  const notes=card.querySelector<HTMLTextAreaElement>('[data-notes]')!;
  const link=card.querySelector<HTMLAnchorElement>('[data-whatsapp]')!;
  const error=card.querySelector<HTMLElement>('[data-quantity-error]')!;
  const checks=Array.from(card.querySelectorAll<HTMLInputElement>('[data-remove]'));
  const preview=card.querySelector<HTMLElement>('[data-message-preview]')!;
  const counter=card.querySelector<HTMLElement>('[data-custom-count]')!;
  const update=()=>{
    const amount=Number(quantity.value);
    const valid=validQuantity(amount);
    error.hidden=valid;
    link.classList.toggle('is-disabled',!valid);
    if(!valid){link.removeAttribute('href');link.setAttribute('aria-disabled','true');return;}
    link.removeAttribute('aria-disabled');
    const removed=checks.filter(input=>input.checked).map(input=>input.value);
    const message=formatOrder({name:card.dataset.product!,quantity:amount,removed,additions:additions.value,substitutions:substitutions.value,notes:notes.value},card.dataset.language as Language);
    link.href=whatsappHref(card.dataset.phone!,message);
    preview.textContent=message;
    const count=removed.length+[additions,substitutions,notes].filter(input=>input.value.trim()).length;
    counter.hidden=count===0;
    counter.textContent=String(count);
  };
  card.addEventListener('input',update);
  card.addEventListener('change',update);
  link.addEventListener('click',event=>{if(!validQuantity(Number(quantity.value))){event.preventDefault();quantity.reportValidity();quantity.focus();}});
  card.querySelector<HTMLButtonElement>('[data-reset]')!.addEventListener('click',()=>{
    checks.forEach(input=>input.checked=false);
    [additions,substitutions,notes].forEach(input=>input.value='');
    update();
  });
  card.querySelector<HTMLElement>('[data-personalization]')!.hidden=false;
  card.querySelector<HTMLElement>('[data-message-panel]')!.hidden=false;
  update();
});

document.querySelectorAll<HTMLElement>('[data-category-scroller]').forEach(wrapper=>{
  const nav=wrapper.querySelector<HTMLElement>('.category-links')!;
  const prev=wrapper.querySelector<HTMLButtonElement>('[data-category-prev]')!;
  const next=wrapper.querySelector<HTMLButtonElement>('[data-category-next]')!;
  prev.hidden=false;next.hidden=false;
  wrapper.classList.add('is-ready');
  const update=()=>{prev.disabled=nav.scrollLeft<2;next.disabled=nav.scrollLeft+nav.clientWidth>=nav.scrollWidth-2;};
  const scroll=(direction:number)=>nav.scrollBy({left:direction*nav.clientWidth*.8,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  prev.addEventListener('click',()=>scroll(-1));
  next.addEventListener('click',()=>scroll(1));
  nav.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  const syncHash=()=>nav.querySelectorAll<HTMLAnchorElement>('a').forEach(a=>{
    if(a.hash===location.hash)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
  });
  window.addEventListener('hashchange',syncHash);
  new ResizeObserver(update).observe(nav);
  syncHash();update();
});
