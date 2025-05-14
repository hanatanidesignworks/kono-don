document.querySelectorAll('.navigation_menu_container a').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault(); // 通常のリンク動作を一旦停止

                    const target = this.getAttribute('href'); // リンク先のIDを取得

                    // ハンバーガーメニューを閉じるために <body> から .open クラスを削除
                    document.querySelector('body').classList.remove('open');

                    // 300ミリ秒後にページ遷移を実行
                    setTimeout(function() {
                        window.location.href = target;
                    }, 300); // 遅延時間（0.3秒）に設定
                });
            });