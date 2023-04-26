### Foldering

📦app
┣ 📂(dashboard)
┃ ┣ 📂admin
┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┗ 📜page.tsx
┃ ┗ 📂info
┃ ┃ ┗ 📜page.tsx
┣ 📂(login)
┃ ┣ 📂new-user
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂sign-in
┃ ┃ ┗ 📜page.tsx
┃ ┗ 📜layout.tsx
┣ 📂(market)
┃ ┣ 📂[category]
┃ ┃ ┣ 📜[id].tsx
┃ ┃ ┗ 📜page.tsx
┃ ┗ 📜layout.tsx
┣ 📂(profile)
┃ ┣ 📂favorite
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂notification
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂user-info
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂user-setting
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂watchlist
┃ ┃ ┗ 📜page.tsx
┃ ┗ 📜layout.tsx
┣ 📂chat
┃ ┣ 📂[id]
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📜layout.tsx
┃ ┗ 📜page.tsx
┣ 📜layout.tsx
┣ 📜loading.tsx
┣ 📜page.tsx
┣ 📜robots.ts
┗ 📜sitemap.ts

📦components
┣ 📂client
┃ ┣ 📂chat
┃ ┃ ┣ 📜ChatInput.tsx
┃ ┃ ┣ 📜ChatLandingBanner.tsx
┃ ┃ ┣ 📜ChatLayoutWrapper.tsx
┃ ┃ ┣ 📜ChatList.tsx
┃ ┃ ┣ 📜ChatRecentInfo.tsx
┃ ┃ ┣ 📜ChatRoomList.tsx
┃ ┃ ┣ 📜ChatSearchUserInput.tsx
┃ ┃ ┣ 📜ChatTabBarOnMobile.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂login
┃ ┃ ┣ 📜CreateNicknameForm.tsx
┃ ┃ ┣ 📜LoginModal.tsx
┃ ┃ ┣ 📜SignInForm.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂mainpage
┃ ┃ ┣ 📜ArrowSection.tsx
┃ ┃ ┣ 📜DescriptionSection.tsx
┃ ┃ ┣ 📜ImageSection.tsx
┃ ┃ ┣ 📜MainPageGrid.tsx
┃ ┃ ┣ 📜MainPageModal.tsx
┃ ┃ ┣ 📜TitleSection.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂market
┃ ┃ ┣ 📜ChatRoomPopup.tsx
┃ ┃ ┣ 📜ItemsGridCard.tsx
┃ ┃ ┣ 📜ItemsPage.tsx
┃ ┃ ┣ 📜PostStatusPopup.tsx
┃ ┃ ┣ 📜SearchItemInput.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂profile
┃ ┃ ┣ 📜NotificationToggle.tsx
┃ ┃ ┣ 📜ProfileTabBarOnMobile.tsx
┃ ┃ ┣ 📜UserInfo.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂root
┃ ┃ ┣ 📜MessageAlarm.tsx
┃ ┃ ┣ 📜MouseTrailer.tsx
┃ ┃ ┣ 📜Subscriber.tsx
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts
┗ 📂server
┃ ┣ 📂global
┃ ┃ ┣ 📜Icons.tsx
┃ ┃ ┣ 📜NavLink.tsx
┃ ┃ ┣ 📜SplitWord.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂login
┃ ┃ ┣ 📜OAuthProviders.tsx
┃ ┃ ┣ 📜SignInBtn.tsx
┃ ┃ ┣ 📜SignInFormSpacer.tsx
┃ ┃ ┣ 📜SignOutBtn.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂profile
┃ ┃ ┣ 📜ProfileNavBar.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂root
┃ ┃ ┣ 📜Logo.tsx
┃ ┃ ┣ 📜NavBar.tsx
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts

📦hooks
┣ 📜index.ts
┣ 📜useCardMouseEffect.ts
┣ 📜useCheckNowSeeing.ts
┣ 📜useFocusToLatestMessage.ts
┣ 📜useForceLinkToCreateNickname.ts
┣ 📜useLoadAllPosts.ts
┣ 📜useLoadAllUsers.ts
┣ 📜useLoadAuthorId.ts
┣ 📜useLoadAuthorPostsInfo.ts
┣ 📜useLoadChatRooms.ts
┣ 📜useLoadMessages.ts
┣ 📜useMagneticBanner.ts
┣ 📜usePermitEntering.ts
┣ 📜useQueryString.ts
┣ 📜useServiceWorker.ts
┣ 📜useSubscribeMessage.ts
┣ 📜useUpdateNowSeeing.ts
┗ 📜useUserSession.ts

📦pages
┗ 📂api
┃ ┣ 📂auth
┃ ┃ ┗ 📜[...nextauth].ts
┃ ┣ 📂getMessages
┃ ┃ ┗ 📜[id].ts
┃ ┣ 📂sendMessage
┃ ┃ ┗ 📜[id].ts
┃ ┣ 📜createBrand.ts
┃ ┣ 📜createChatRoom.ts
┃ ┣ 📜createPost.ts
┃ ┣ 📜createSubscription.ts
┃ ┣ 📜deleteAccount.ts
┃ ┣ 📜deleteEmptyChatRoom.ts
┃ ┣ 📜deleteExistChatRoom.ts
┃ ┣ 📜deleteSubscription.ts
┃ ┣ 📜getAllBrand.ts
┃ ┣ 📜getAllPost.ts
┃ ┣ 📜getAllUsers.ts
┃ ┣ 📜getAuthorsPosts.ts
┃ ┣ 📜getChatRoomList.ts
┃ ┣ 📜getNowSeeing.ts
┃ ┣ 📜revalidate.ts
┃ ┣ 📜sendMessageToFirebase.ts
┃ ┣ 📜updateChatRoomLatestMessage.ts
┃ ┣ 📜updateLatestSeenMessage.ts
┃ ┣ 📜updateNickname.ts
┃ ┣ 📜updateNowSeeing.ts
┃ ┗ 📜updatePostStatus.ts

📦server
┣ 📜auth.ts
┣ 📜db.ts
┗ 📜redis.ts

📦lib
┣ 📂smtp
┃ ┗ 📜index.ts
┣ 📜contexts.tsx
┣ 📜session.ts
┗ 📜utils.ts

📦types
┣ 📜auth.d.ts
┣ 📜db.d.ts
┣ 📜index.d.ts
┗ 📜prisma.d.ts

📦worker
┣ 📜firebase-account.ts
┣ 📜firebase.ts
┗ 📜index.js

📦public
┣ 📂assets
┃ ┣ 📜arrow.svg
┃ ┣ 📜icon-192x192.png
┃ ┣ 📜icon-256x256.png
┃ ┣ 📜icon-384x384.png
┃ ┣ 📜icon-512x512.png
┃ ┗ 📜spinner.svg
┣ 📂fonts
┃ ┣ 📜LINESeedKR-Rg.woff2
┃ ┣ 📜LeferiPointSpecial.woff2
┃ ┗ 📜NunitoSans-Regular.woff2
┣ 📂images
┃ ┣ 📜cursor-default.png
┃ ┣ 📜cursor-pointer.png
┃ ┣ 📜cursor-see.png
┃ ┣ 📜logo.png
┃ ┣ 📜pingu.webp
┃ ┣ 📜sample0.webp
┃ ┣ 📜sample1.webp
┃ ┣ 📜sample2.webp
┃ ┣ 📜sample4.webp
┃ ┗ 📜sample5.webp
┣ 📜manifest.json
┣ 📜sw.js
┣ 📜workbox-b777c91b.js
┗ 📜worker-1KUTgiAm90CyAAVZ5-rmf.js
