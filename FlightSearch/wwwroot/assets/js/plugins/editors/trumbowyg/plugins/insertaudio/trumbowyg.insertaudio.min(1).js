!function(e){"use strict";var r={src:{label:"URL",required:!0},autoplay:{label:"AutoPlay",required:!1,type:"checkbox"},muted:{label:"Muted",required:!1,type:"checkbox"},preload:{label:"preload options",required:!1}};e.extend(!0,e.trumbowyg,{langs:{en:{insertAudio:"Insert Audio"},da:{insertAudio:"Indsæt lyd"},fr:{insertAudio:"Insérer un son"},ru:{insertAudio:"Вставить аудио"},ja:{insertAudio:"音声の挿入"},tr:{insertAudio:"Ses Ekle"},pt_br:{insertAudio:"Inserir áudio"}},plugins:{insertAudio:{init:function(n){var t={fn:function(){var t=function(r){var t="<audio controls";r.src&&(t+=" src='"+r.src+"'"),r.autoplay&&(t+=" autoplay"),r.muted&&(t+=" muted"),r.preload&&(t+=" preload='"+r+"'"),t+="></audio>";var i=e(t)[0];return n.range.deleteContents(),n.range.insertNode(i),!0};n.openModalInsert(n.lang.insertAudio,r,t)}};n.addBtnDef("insertAudio",t)}}}})}(jQuery);